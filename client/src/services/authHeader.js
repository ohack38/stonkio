export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('access'));
  
    if (user) {
      return { Authorization: 'Bearer ' + user };
    } else {
      return {};
    }
  }
  