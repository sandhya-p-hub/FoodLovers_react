import React, { Component } from "react";
import { getUrl } from "./services/recipes";

class Recipe extends Component {
  state = {
    url: []
  };

  async componentDidMount() {
    console.log("hiihiihijihihiji");
    const url = await getUrl();
    this.setState({ url });
    console.log("-----------------> ", url);
  }

  render() {
    return (
      <section className="recipe-channel content__container">
        <div class="content__text-container">
          <div class="recipe-channel__heading">
            <h2 class="recipe-channel__subhead recipe-channel__newest-recipes-subhead">
              Our Newest Recipes
            </h2>
            <div class="recipe-channel__view-all">
              <a href="/recipes/search">View All Recipes</a>
              <span class="icon__arrow icon__arrow--right"></span>
            </div>
          </div>
          <div class="recipe-results-tiles" class="row">
            <div
              class="card collectable-tile js-collectable-tile js-quick-basket"
              data-id="82672"
              data-type="recipe"
            >
              <div class="photo-block">
                <a
                  // href="/recipes/82672-risotto-carbonara-recipe"
                  class="photo photo-block__link"
                  title="Risotto alla Carbonara"
                >
                  <img
                    alt="Risotto alla Carbonara"
                    class="js-quick-basket-img"
                    //data-pin-media="https://images.food52.com/58m1zGnpjdcqhe5Ywkig6HN67xQ=/1500x0/79919997-84c7-445c-bf22-772712ca9dc1--2019-0218_risotto-alla-carbonara_3x2_ty-mecham.jpg"
                    //data-pin-url="https://food52.com/recipes/82672-risotto-carbonara-recipe"
                    //data-pin-description="Risotto alla Carbonara recipe on Food52"
                    src={this.state.url}
                  ></img>
                </a>
              </div>

              <div class="card__details">
                <h3>
                  <a
                    title="Risotto alla Carbonara"
                    class="js-quick-basket-title"
                    //  href="/recipes/82672-risotto-carbonara-recipe"
                  >
                    Risotto alla Carbonara
                  </a>
                </h3>
              </div>
            </div>

            {/* <div
              class="card collectable-tile js-collectable-tile js-quick-basket"
              data-id="82670"
              data-type="recipe"
            >
              <div class="photo-block">
                <a
                  href="/recipes/82670-best-scalloped-potatoes-recipe"
                  class="photo photo-block__link"
                  title="Our Best Scalloped Potatoes"
                >
                  <img
                    alt="Our Best Scalloped Potatoes"
                    class="js-quick-basket-img"
                    //data-pin-media="https://images.food52.com/R5IWdsjJCWcvrpWTJWX5HOhoLoY=/1500x0/2f1fc820-9139-4ae4-b225-b6a00e3e256e--2020-0225_our-best-scalloped-potatoes_3x2_julia-gartland_111.jpg"
                    //data-pin-url="https://food52.com/recipes/82670-best-scalloped-potatoes-recipe"
                    //data-pin-description="Our Best Scalloped Potatoes recipe on Food52"
                    src="https://images.food52.com/YAdJYjcxLrszj3NAVovyX883I5U=/530x354/2f1fc820-9139-4ae4-b225-b6a00e3e256e--2020-0225_our-best-scalloped-potatoes_3x2_julia-gartland_111.jpg"
                  ></img>
                </a>
              </div>

              <div class="card__details">
                <h3>
                  <a
                    title="Our Best Scalloped Potatoes"
                    class="js-quick-basket-title"
                    href="/recipes/82670-best-scalloped-potatoes-recipe"
                  >
                    Our Best Scalloped Potatoes
                  </a>
                </h3>
              </div>
            </div> */}

            {/* <div
              class="card collectable-tile js-collectable-tile js-quick-basket"
              data-id="82667"
              data-type="recipe"
            >
              <div class="photo-block">
                <a
                  href="/recipes/82667-spiced-pecan-sandies-recipe"
                  class="photo photo-block__link"
                  title="Bien Cuit’s Masala Pecan Sandies"
                >
                  <img
                    alt="Bien Cuit’s Masala Pecan Sandies"
                    class="js-quick-basket-img"
                    //data-pin-media="https://images.food52.com/VCmFqCZC3jTJOLhB-qpk1wbZA4I=/1500x0/5cce9345-f490-4b15-9b09-677a53544828--2019-0110_curried-pecan-sandies_3x2_ty-mecham_1-.jpg"
                    //data-pin-url="https://food52.com/recipes/82667-spiced-pecan-sandies-recipe"
                    //data-pin-description="Bien Cuit’s Masala Pecan Sandies recipe on Food52"
                    src="https://images.food52.com/FdrA1VducoOg1LgaUFRck-uVolE=/530x354/5cce9345-f490-4b15-9b09-677a53544828--2019-0110_curried-pecan-sandies_3x2_ty-mecham_1-.jpg"
                  ></img>
                </a>
              </div>

              <div class="card__details">
                <h3>
                  <a
                    title="Bien Cuit’s Masala Pecan Sandies"
                    class="js-quick-basket-title"
                    href="/recipes/82667-spiced-pecan-sandies-recipe"
                  >
                    Bien Cuit’s Masala Pecan Sandies
                  </a>
                </h3>
              </div>
            </div> */}

            {/* <div
              class="card collectable-tile js-collectable-tile js-quick-basket"
              data-id="82665"
              data-type="recipe"
            >
              <div class="photo-block">
                <a
                  href="/recipes/82665-salted-egg-yolk-cake-recipe"
                  class="photo photo-block__link"
                  title="Salted Egg Yolk Pound Cake"
                >
                  <img
                    alt="Salted Egg Yolk Pound Cake"
                    class="js-quick-basket-img"
                    //data-pin-media="https://images.food52.com/oXY5L4uIDNcoS7ep2KKVaC707qM=/1500x0/087460c9-9781-47a9-876b-26380f3a1bfb--2020-0211_salted-egg-yolk-pound-cake_3x2_rocky-luten_020.jpg"
                    //data-pin-url="https://food52.com/recipes/82665-salted-egg-yolk-cake-recipe"
                    //data-pin-description="Salted Egg Yolk Pound Cake recipe on Food52"
                    src="https://images.food52.com/JUa85oaIutBlOTqV7j4Tp8DTtV4=/530x354/087460c9-9781-47a9-876b-26380f3a1bfb--2020-0211_salted-egg-yolk-pound-cake_3x2_rocky-luten_020.jpg"
                  ></img>
                </a>
              </div>

              <div class="card__details">
                <h3>
                  <a
                    title="Salted Egg Yolk Pound Cake"
                    class="js-quick-basket-title"
                    href="/recipes/82665-salted-egg-yolk-cake-recipe"
                  >
                    Salted Egg Yolk Pound Cake
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Recipe;
