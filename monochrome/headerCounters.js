const ADD_TO_CART_EVENT = 'cart/productAdded';
const REMOVE_FROM_CART_EVENT = 'cart/productRemoved';
const ADD_TO_FAVORITES_EVENT = 'fav/productAdded';
const REMOVE_FROM_FAVORITES_EVENT = 'fav/productRemoved';

class HeaderCounters extends React.Component {
    state = {
        cartItems: [],
        cartItemsCount: 0,
        favItems: [],
        favItemsCount: 0,
    }

    onClick = (event) => {
        event.preventDefault();
        alert(`Items in your cart: ${this.state.cartItems}`)
    }

    showProducts = (collectionName, displayName) => {
        let message = '';

        if(this.state[collectionName].length <= 0) {
            message = `There are no products in your ${displayName}.`
        } else {
            message = ` There are the PIDS in your ${displayName}: ${this.state[collectionName]}.`
        }

        alert(message)
    }

    productCartAction = (event) => {
        const productId = event.detail.productId;
        const eventType = event.type;
        const cartItems = this.state.cartItems.slice();

        switch (eventType) {
            case ADD_TO_CART_EVENT:
                cartItems.push(productId);
                this.setState({
                    cartItems,
                    cartItemsCount: this.state.cartItemsCount + 1,
                });
                break
            case REMOVE_FROM_CART_EVENT:
                this.setState({
                    cartItems: cartItems.filter((item) => {
                        return item !== productId;
                    }),
                    cartItemsCount: this.state.cartItemsCount - 1,
                })
                break
        }

    }

    productFavoritesAction = (event) => {
        console.log(event)
        const productId = event.detail.productId;
        const eventType = event.type;
        const favItems = this.state.favItems.slice();

        switch (eventType) {
            case ADD_TO_FAVORITES_EVENT:
                favItems.push(productId);
                this.setState({
                    favItems,
                    favItemsCount: this.state.favItemsCount + 1,
                });
                break
            case REMOVE_FROM_FAVORITES_EVENT:
                this.setState({
                    favItems: favItems.filter((item) => {
                        return item !== productId;
                    }),
                    favItemsCount: this.state.favItemsCount - 1,
                })
                break
        }

    }

    componentDidMount() {
        addEventListener(ADD_TO_CART_EVENT, this.productCartAction);
        addEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);

        addEventListener(ADD_TO_FAVORITES_EVENT, this.productFavoritesAction);
        addEventListener(REMOVE_FROM_FAVORITES_EVENT, this.productFavoritesAction);
    }

    componentWillUnmount() {
        removeEventListener(ADD_TO_CART_EVENT, this.productCartAction);
        removeEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);

        removeEventListener(ADD_TO_FAVORITES_EVENT, this.productFavoritesAction);
        removeEventListener(REMOVE_FROM_FAVORITES_EVENT, this.productFavoritesAction);
    }

    render() {
        return (
            <ul>
                <li>
                    <a
                        href="http://"
                        title="My Account"
                    ><i className="fas fa-user"></i></a>
                </li>

                <li>
                    <a
                        href="http://"
                        title="Saved Items"
                        onClick={(event) => {
                            event.preventDefault();
                            this.showProducts('favItems', 'favorites')
                        }}
                    >{this.state.favItemsCount} <i className="far fa-heart"></i></a>
                </li>

                <li>
                    <a
                        href="http://"
                        title="Cart"
                        onClick={(event) => {
                            event.preventDefault();
                            this.showProducts('cartItems', 'cart')
                        }}
                    >{this.state.cartItemsCount} <i className="fas fa-shopping-bag"></i></a>
                </li>
            </ul>
        )
    }
}

const headerCounters = document.querySelector('.header-controls');

ReactDOM.createRoot(headerCounters).render(<HeaderCounters></HeaderCounters>)