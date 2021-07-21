import React, {Component} from 'react';


export default class ErrorBoundary extends Component {
    state = {
      hasError: false,
      error: { message: '', stack: '' },
      info: { componentStack: '' }
    };
  
    static getDerivedStateFromError = error => {
      return { hasError: true };
    };
  
    componentDidCatch = (error, info) => {
      this.setState({ error, info });
    };
  
    render() {
      const { hasError } = this.state;
      const { children } = this.props;
  
      return hasError ? <h2>Error</h2>: children;
    }
  }