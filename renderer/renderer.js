//虚拟DOM
const vnode = {
  //标签名称
  tag: 'h1',

  //标签属性
  props: {
    onClick: ()=>alert('your renderer works!'),
  },

  //子节点
  children: 'click me',
};

function renderer(vnode, container) {
  //使用vnode.tag作为标签名创建DOM元素
  const el = document.createElement(vnode.tag);

  //遍历vnode.props，将属性、事件添加到DOM元素
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      //如果key以on开头，说明它是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), //事件名称onClick --->click
        vnode.props[key]
      ); //事件处理函数
    }
  }

  //处理children
  if (typeof vnode.children === 'string') {
    //如果chidren是字符串，说明它是元素的文本节点
    el.appendChild(document.createTextNode(vnode.children));
  } else if (Array.isArray(vnode.children)) {
    //递归的调用renderer函数渲染子节点，使用当前元素el作为挂在点
    vnode.children.forEach((child) => {
      renderer(child, el);
    });
  }

  //将元素添加到挂载点下
  container.appendChild(el);
}


renderer(vnode,document.body)