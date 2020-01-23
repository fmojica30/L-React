import React, { useReducer, useEffect, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);

    default:
      throw new Error("Should not be here!");
  }
};

function Ingredients() {
  const [userIngredients, ingredientDispatch] = useReducer(
    ingredientReducer,
    []
  );
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear
  } = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      ingredientDispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      ingredientDispatch({
        type: "ADD",
        ingredient: {
          id: data.name,
          ...reqExtra
        }
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const addIngredientHandler = useCallback(
    ingredient => {
      sendRequest(
        "https://learning-hooks-ad790.firebaseio.com/ingredients.json",
        "POST",
        JSON.stringify({
          title: ingredient.title,
          amount: ingredient.amount
        }),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    id => {
      sendRequest(
        `https://learning-hooks-ad790.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        id,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    ingredientDispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
