import { useGlobalContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart, FaRegFlag } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites, favorites, error } =
    useGlobalContext();

  if (loading) {
    return (
      <div className="loading-container">
        <img className="loading-img" src="./loadngFood.gif" alt="" />;
      </div>
    );
  } else if (error !== "") {
    return (
      <div className="loading-container">
        <img className="loading-img" src="./fooderror.jpg" alt="" />
        <p>{error}</p>
      </div>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>We can't find such a meal</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {console.log(meals)}

      {meals.map((meal) => {
        const {
          idMeal,
          strMeal: title,
          strMealThumb: image,
          strArea: Area,
          strCategory: Category,
        } = meal;
        const fav = favorites.find((e) => {
          return e.idMeal === idMeal;
        });
        console.log(fav);
        return (
          <article key={idMeal} className="single-meal">
            <img
              onClick={() => selectMeal(idMeal)}
              className="img"
              src={image}
            />
            <footer className="ftr">
              <div>
                <p>
                  <FaRegFlag />
                  {Area}
                </p>
                <p>
                  <FaConciergeBell />
                  {Category}
                </p>
              </div>
              <div>
                <h4>{title}</h4>
                <button
                  onClick={() => {
                    addToFavorites(idMeal);
                  }}
                  className="like-btn"
                >
                  {!fav ? <AiOutlineHeart /> : <FaHeart fill="red" />}
                </button>
              </div>
            </footer>
          </article>
        );
      })}
    </section>
  );
};
export default Meals;
