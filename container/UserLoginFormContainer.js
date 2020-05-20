import { connect } from 'react-redux';
import { login } from "../actions/login";
import LoginForm from "../components/LoginForm";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        login : data => dispatch(login(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);