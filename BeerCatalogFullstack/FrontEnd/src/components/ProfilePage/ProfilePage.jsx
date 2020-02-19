import React from 'react';
import { withRouter } from 'react-router-dom';

import validationHelper from 'helpers/validationHelper.js'
import userService from 'services/userService';
import { UserContext } from 'store/context/UserContext';

import './profilePage.scss';

class ProfilePage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            user: null
        };
    }

    async componentDidMount() {
        const user = await userService.getUser(this.context.userId.userID);
        this.setState({user: user});
        document.getElementsByName("name")[0].value=user.name;
        document.getElementsByName("email")[0].value=user.email;
        const birthdate = user.birthdate;
        document.getElementsByName("birthdate")[0].value = birthdate ? birthdate.slice(0,10) : "";
    } 
    
    deletePhotoClick = () => {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);  
            user.photo = '';                                     
            return { user };                                 
          });
    }

    onNameFieldChange(e) {
        e.persist();
        this.setState((prevState) => {
            let user = Object.assign({}, prevState.user);  
            user.name = e.target.value;                                     
            return { user };                                 
        });
    }

    onBirthdateFieldChange(e) {
        e.persist();
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);  
            user.birthdate = e.target.value;                                     
            return { user };                                 
        });
    }

    onAddPhotoClick(){ 
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/x-png,image/gif,image/jpeg";
        input.onchange = (e) =>{
            const filesSelected = input.files;
            if (filesSelected.length > 0) {
                const fileToLoad = filesSelected[0]; 
                const fileReader = new FileReader();   
                fileReader.onload = fileLoadedEvent => {
                    const srcData = fileLoadedEvent.target.result;
                    this.setState(prevState => {
                        let user = Object.assign({}, prevState.user);  
                        user.photo = srcData;                                     
                        return { user };                                 
                      });
                }
                fileReader.readAsDataURL(fileToLoad);
            }
        }
        input.click();
    }

    async onSaveButtonClick() {
        if(validationHelper.isEmailValid(this.state.user.email) && this.state.user.name != ""){
            const result = await userService.updateUser(this.state.user);
            if(result=="Success"){
                alert("The user has been updated");
                this.props.history.push('/');
            }
            else{
                alert(result);
            }
        }
        else{
            alert("Fill all required fields");
        }
    }

    onCloseButtonClick(){
        debugger;
        this.props.history.push('/');
    }

    render() {
        return (
            (this.state.user &&
                <section className="profile-page">
                    <h1 className="profile-page__title">Your profile</h1>
                    <div className="profile-page__content">
                        <div className="profile-page__image-block">
                            <img
                                className="profile-page__user-image"
                                alt=""
                                src={this.state.user.photo}
                            />
                        <div>
                            <button className="profile-page__add-image-button" type="button" onClick={this.onAddPhotoClick.bind(this)}>
                                Add image
                            </button>
                            <button className="profile-page__delete-image-button" type="button" onClick={this.deletePhotoClick}>
                                Delete image
                            </button>
                        </div>
                        </div>
                        <div className="profile-page__user-info">
                            <div className="profile-page__field">
                                <label className="profile-page__field-title">Name</label>
                                <input
                                name="name"
                                type="text"
                                className="profile-page__field-input"
                                onChange={this.onNameFieldChange.bind(this)}
                                />
                            </div>
                            <div className="profile-page__field">
                                <label className="profile-page__field-title">E-mail</label>
                                <input
                                name="email"
                                type="email"
                                className="profile-page__field-input"
                                />
                            </div>
                            <div className="profile-page__field">
                                <label className="profile-page__field-title">Birthdate</label>
                                <input
                                name="birthdate"
                                type="date"
                                className="profile-page__field-input"
                                onChange={this.onBirthdateFieldChange.bind(this)}
                                />
                            </div>
                            <button type="button" className="profile-page__save-button" onClick={this.onSaveButtonClick.bind(this)}>Save</button>
                            <button type="button" className="profile-page__close-button" onClick={this.onCloseButtonClick.bind(this)}>Close</button>
                        </div>
                    </div>
                </section>
            ) 
        )
    }
}

ProfilePage.contextType = UserContext;

export default withRouter(ProfilePage);