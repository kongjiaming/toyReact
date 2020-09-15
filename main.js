import{ createElement,Component,render  } from './toyReact'

class MyComponent extends Component { 
   render(){
       return <div>
          <h1>My component</h1>   
          { this.children}
       </div>
     }
  }

render (<MyComponent id="wrap" class="test">
    <div>111</div>
    <div></div>
</MyComponent>,document.body);
