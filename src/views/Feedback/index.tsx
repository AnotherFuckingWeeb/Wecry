import React from 'react'
import { Helmet } from 'react-helmet'
import { IFeedbackState } from './FeedbackPropsState'
import { IFeedbackProps } from './FeedbackPropsInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { DescriptionInput } from '../../components/DescriptionInput'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { Loading } from '../../components/Loading'
import { IsLoggedModal } from '../../components/IsLoggedModal'
import { Images } from '../../assets/images'
import { User } from '../../utils/user'
import './style.css'

class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {

    private user: User = new User();

    constructor(props: IFeedbackProps) {
        super(props);

        this.state = {
            comment: '',
            isLogged: false,
            isLoading: false
        }
    }

    private hideIsLoggedModal = () => {
        this.setState({
            isLogged: true
        });
    }

    private onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        });
    }

    private onSubmit = async () : Promise<void> => {
        const url = 'http://localhost:4000/feedback';
        const request = {
            userId: this.user.Id,
            comment: this.state.comment
        };

        this.setState({ isLoading: true });

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        this.setState({ isLoading: false });

    }

    componentDidMount() {
        if (this.user.Id) {
           this.hideIsLoggedModal(); 
        }
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Feedback</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <div className='feedback-form-container'>
                    <Loading isLoading={this.state.isLoading} />
                    <div className='feedback-form' >
                        <div className='yellow-container-advice' >
                            <p>Your opinion will appear in the front page</p>
                        </div>
                        <div className='feedback-form-elements-container' >
                            <img src={Images.hug} alt="" />
                            <h1>Opinion Box</h1>
                            <p>At wecry we believe that user opinions count a lot to continue advancing as a company in addition to providing new users with confidence to use our web to buy and sell</p>
                             <DescriptionInput name='comment' value={this.state.comment} placeholder='your opinion goes here' onChange={this.onChange} />
                            <ButtonStyleOne title='Submit' onClick={this.onSubmit}  />
                        </div>
                        { this.state.isLogged ? null : <IsLoggedModal hide={this.hideIsLoggedModal} /> }
                    </div>
                </div>
            </main>
        )
    }
}

export default Feedback;