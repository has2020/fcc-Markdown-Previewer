import React from 'react';
import './App.css';
import marked from 'marked';



const placeholder =
    `# Markdown Previewer!

## Two hash tag subheader

### This is three...

#### Cuatro...

##### Cinco...

###### Six...those are the headers...now for more...
  
To do single-line code use  \`<div> 2 backticks </div>\`

\`\`\`
// this is multi-line code:

function benCooler() {
ben.cool++;
benCooler();
}
\`\`\`
  
You can also make text **bold** or _italic_ or **_both!_**
You can also ~~Ben is a LOSER~~.

There's also [link to my facebook web dev section](https://www.facebook.com/benjaminadk), and
> To Ben or not to Ben, that tis' the question

---

Tables are Easy:

Person| Cool Bool | Awesome Bool
------------ | ------------- | ------------- 
benjaminadk | true | true
you | true | false

***

- Lists of stuff
  - Bulleted
     - Just Indent
        - Easy Peasy


1. Numbered Lists
1. Use just 1s if you want! 
1. dashes
- asterisks.
* Next we have images

![Images of Me](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/IMG_0156.JPG)

<p id='ben' style='border:5px outset #cecece;background:pink;'onclick='document.getElementById("ben").style.setProperty("transform","rotate(180deg)");'>Inline HTML/CSS/JS WORK TOO CLICK ME....BIZZARE!!!</p>

### You Tube Links With Photo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/v6rGkOuEUP4/0.jpg)](https://www.youtube.com/watch?v=v6rGkOuEUP4)
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder,
    }
     this.handleChange = this.handleChange.bind(this);

  }
  handleChange = (e) =>  {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {


    return (
        <div className="rootWrap row">

          <div className="column medium-6 small-12">
            <Toolbar text="Enter Markdown Here"
                     title="Press to Maximize Editor"/>
            <Editor markdown={this.state.markdown}
                    onChange={this.handleChange} />
          </div>

          <div className="previewWrap column medium-6 small-12">
            <Toolbar text="Here is Your Live Preview"
                     title="Press to Maximize Preview"/>
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
    );
  }
}

const Toolbar = (props) => {
  return (
      <div className="toolbar">
        {props.text}
        <i  title={props.title}></i>

      </div>
  );
}

const Editor = (props) => {
  return (
      <textarea id="editor"
                value={props.markdown}
                onChange={props.onChange}
                type="text" />
  )
}

const Preview = (props) => {
  return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
  )
}
export default (App);
