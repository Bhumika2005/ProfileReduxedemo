import {connect} from 'react-redux';
import ProfileComponent from '../component/profile.component';
import * as actionCreators from '../../action/action';
import {withRouter} from 'react-router';

export const mapStateToProps = state => {
    return {
        
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        saveProfileData:(profileData) => dispatch(actionCreators.getUserDetail(profileData))
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfileComponent));