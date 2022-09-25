const ADD_TO_CART_EVENT = 'cart/productAdded';
const REMOVE_FROM_CART_EVENT = 'cart/productRemoved';
const ADD_TO_FAVORITES_EVENT = 'fav/productAdded';
const REMOVE_FROM_FAVORITES_EVENT = 'fav/productRemoved';

class AddToCartButton extends React.Component {
    state = {
        busy: false,
        active: false,
    }

    handleOnClick = (event) => {
        event.preventDefault();
        this.setState({
            busy: true,
        })

        setTimeout(() => {
            const eventName = this.state.active ? REMOVE_FROM_CART_EVENT : ADD_TO_CART_EVENT;

            dispatchEvent(
                new CustomEvent(eventName, {
                    detail: {
                        productId: this.props.productId
                    },
                }),
            );


            this.setState({
                busy: false,
                active: !this.state.active,
            })
        }, 800)
    }

    getIcon = () => {
        if (this.state.busy) {
            return <i className="fas fa-spinner fa-spin"></i>
        } else if (this.state.active) {
            return <i className="fas fa-check"></i>
        } else {
            return <i className="far fa-plus-square"></i>
        }
    }

    render() {
        let message = '';
        if (this.state.active) {
            message = 'Remove from cart'
        } else {
            message = 'Add to cart'
        }

        return (
            <a href="" title={message} onClick={this.handleOnClick}>
                {this.getIcon()}
            </a>
        )
    }
}

class AddToFavoritesButton extends React.Component {
    state = {
        busy: false,
        active: false,
    }

    handleOnClick = (event) => {
        event.preventDefault();
        this.setState({
            busy: true,
        })

        setTimeout(() => {
            const eventName = this.state.active ? REMOVE_FROM_FAVORITES_EVENT : ADD_TO_FAVORITES_EVENT;

            dispatchEvent(
                new CustomEvent(eventName, {
                    detail: {
                        productId: this.props.productId
                    },
                }),
            );


            this.setState({
                busy: false,
                active: !this.state.active,
            })
        }, 800)
    };

    getIcon = () => {
        if (this.state.busy) {
            return <i className="fas fa-spinner fa-spin"></i>
        } else if (this.state.active) {
            return <i className="fas fa-heart"></i>
        } else {
            return <i className="far fa-heart"></i>
        }
    }

    render() {
        let message = '';
        if (this.state.active) {
            message = `Remove from favorites`
        } else {
            message = `Add to favorites`
        }

        return (
            <a href="" title={message} onClick={this.handleOnClick}>
                {this.getIcon()}
            </a>
        )
    }
}

class TileControls extends React.Component {
    render() {
        return [
            <AddToFavoritesButton key="favorites" productId={this.props.productId}></AddToFavoritesButton>,
            <AddToCartButton key="cart" productId={this.props.productId}></AddToCartButton>,
        ]
    }
}

const tileControls = document.querySelectorAll('.product-tile-controls');
tileControls.forEach((tileControl, index) => {
    ReactDOM.createRoot(tileControl).render(<TileControls productId={index} ></TileControls>)
})