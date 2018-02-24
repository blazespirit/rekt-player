import { connect } from 'react-redux';
import MainMenu    from '../components/main-menu.jsx';

const mapStateToProps = (state, ownProps) => ({
    focus: state.mainMenu
});

const menuPage = connect(
    mapStateToProps
)(MainMenu)
  
export default menuPage;