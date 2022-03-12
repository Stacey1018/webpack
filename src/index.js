import _ from 'lodash';
import printMe from './print';
import './style.css'
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button')
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里，然后查看console'

    btn.onclick = printMe

    element.appendChild(btn)

    return element;
  }
  
  let element = component();
  document.body.appendChild(element);


  if (module.hot){
    module.hot.accept('./print.js',function(){
      console.log('Accepting the update printMe module')
      // printMe()
      document.body.removeChild(element)
      element = component()
      element = component()
  document.body.appendChild(element);

    })
  }