import { connect } from "react-redux";
import App from '../components';
import { updateToCart } from '../../lib/actions';

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items: state.items }
    }, 
    function mapDispatchToProps(dispatch) {
        return {
            onUpdateToCart: (item, quantity) => dispatch(updateToCart(item, quantity))
        }
    }
)(App)