import React from 'react';


const styles = {
  spacer: {
    display: 'flex',
  },
  box: {
  },
};


const Spacer = ({
  children,
}) => {
  return (
    <div style={styles.spacer}>
      {React.Children.map(children, (child, i) => (
        <div style={{ ...styles.box, margin: i === 0 ? '0 16px 0 0' : '0 16px' }}>
          {child}
        </div>
      ))}
    </div>
  );
};


export default Spacer;
