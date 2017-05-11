/**
 * Created by yiran on 2017/5/5.
 */
const $ = window.$ = require('jquery');
const React = require('react');

const ChooseBar = React.createClass({

    getInitialState: function() {
        return {
            choose: -1,
            tipShow: -1,
            answer: -1,
            process: this.props.question.process,
            results: [-1,-1,-1,-1],
        };
    },

    componentWillMount() {

    },


    handleClick(index) {
        // this.setState({liked: !this.state.liked});
        console.log('click' + index)
        if(index === this.props.question.trueindex[0])
        {
            this.state.results[index] = 1;
            this.setState({results: this.state.results})
            console.log('right');
            this.setState({answer: 1});
            this.props.passCallBack(this.props.lessonIndex ,this.props.index);
        } else {
            this.state.results[index] = 0;
            this.setState({results: this.state.results})
            this.setState({answer: 0});
        }
    },

    render() {
        var question = this.props.question
        return(
        <div className="choose-bar">
            <div className="choose-question">
                <h1>问题</h1>
                {question.introduce}
            </div>
            {this.optionRender()}
            {this.tipsRender()}
        </div>
        )
    },

    optionRender () {
        let question = this.props.question;
        let arr=[];
        for(let i = 0; i< question.answerList.length; i++) {
            arr.push( <div className="choose-options" key={i}>
                <div className="click-bar" onClick={this.props.question.process ? null : this.handleClick.bind(this, i)}></div>
                <p>{question.answerList[i].detail}</p>
                {this.resultRender(i)}
                </div>)
        }
        return arr;
    },

    resultRender(index) {
        let question = this.props.question;
        //通过情况下.绘制正确答案
        if(this.state.process) {
            if(question.trueindex[0] === index) {
                return <img src={'./assets/image/course/indRight.png'}></img>
            } else {
                return null;
            }
        } else {
            if(this.state.results[index] === 1) {
                return <img src={'./assets/image/course/indRight.png'}></img>
            } else if(this.state.results[index] === 0){
                return <img src={'./assets/image/course/indWrong.png'}></img>
            }
        }
    },

    tipsRender () {
        if(this.state.answer !== -1 || this.props.question.process)
        {
            return (<div className="choose-tips">
                <h1>Tips:</h1>
                <p>知识点1</p>
            </div>);
        }
    }
});

module.exports = ChooseBar;