import {connect} from 'react-redux';
import UserListComponent from '../component/userlist.component';

export const mapStateToProps = state => {
    return {
        userList: state.userData.data
    }
};
export const mapDispatchToProps = dispatch => {
    return {
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);