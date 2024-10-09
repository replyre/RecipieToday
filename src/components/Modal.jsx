import { useState } from "react";
import { useGlobalContext } from "../context";
import { GoDotFill } from "react-icons/go";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const [selectedTab, setSelectedTab] = useState("ingredients");
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedMeal[`strIngredient${i}`];
    const measure = selectedMeal[`strMeasure${i}`];

    // Only include ingredients that are not empty
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure });
    }
  }
  const instructionList = text.split("\r\n");
  return (
    <>
      <aside className="modal-overlay">
        <div className="modal-container">
          <img className="img modal-img" alt={title} src={image} />
          <div className="modal-content">
            <h4>{title}</h4>
            <div>
              <p
                onClick={() => setSelectedTab("ingredients")}
                style={{
                  borderBottom:
                    selectedTab === "ingredients" ? "2px solid red" : "none",
                }}
              >
                Ingedients
              </p>
              <p
                onClick={() => setSelectedTab("instructions")}
                style={{
                  borderBottom:
                    selectedTab === "instructions" ? "2px solid red" : "none",
                }}
              >
                Instructions
              </p>
            </div>
            <div className="ingredients-list">
              {selectedTab === "ingredients" &&
                ingredients.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{
                        display: "flex",
                        gap: "2px",
                        alignItems: "center",
                      }}
                    >
                      <GoDotFill fill="red" /> {e.measure} {e.ingredient}
                    </p>
                  );
                })}
            </div>
            {selectedTab === "instructions" && (
              <section>
                {instructionList.map((instruction, index) =>
                  instruction ? <p key={index}>{instruction}</p> : null
                )}
              </section>
            )}
            <a href={source} target="_blank">
              Original Source
            </a>
            <button className="btn btn-hipster close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
export default Modal;
