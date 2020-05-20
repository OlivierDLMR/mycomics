import { connect } from 'react-redux';
import { register } from "../actions/register";
import RegisterForm from "../components/registerForm";

const mapStateToProps = state => {
    return {
        register: user => dispatch(register(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);