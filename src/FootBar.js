const footerStyle = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: '#343a40',
  color: 'white',
  textAlign: 'center'
};

const date = new Date();
const yearNow = date.getFullYear();

function FootBar() {
  return (
    <div style={footerStyle}>
      <div style={{lineHeight: '4'}}>Copyright © Yaritama {yearNow}</div>
    </div>
  );
}

export default FootBar;