// 自定义Hook
import React, { useState, useEffect } from 'react';
// 通过friendID订阅好友状态
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}


// 通过useFriendStatus这个自定义的hook，我可以非常轻松的在下面两个组件中实现逻辑的复用

// FriendStatus获取好友状态
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

// FriendListItem获取好友状态
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
};







// 可是对于熟悉高阶组件的同学来说依旧可以轻松的提取一个名叫useFriendStatus的高阶组件
function useFriendStatus(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
        ChatAPI.subscribeToFriendStatus(
          this.props.friend.id,
          this.handleStatusChange
        );
    }
     
    componentDidUpdate(prevProps) {
        ChatAPI.unsubscribeFromFriendStatus(
          prevProps.friend.id,
          this.handleStatusChange
        );
        ChatAPI.subscribeToFriendStatus(
          this.props.friend.id,
          this.handleStatusChange
        );
      }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
          this.props.friend.id,
          this.handleStatusChange
        );
    }
    
    render() {
      return <WrappedComponent isOnline={isOnline} />;
    }
  }
}
 