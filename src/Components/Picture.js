
const Picture = (props) => {

  const styles = {
    img: {
      minWidth: '40%'
    }
  }

  return (
    <li>
      <img src={props.url} alt="" style={styles.img}/>
    </li>
  );
}

export default Picture;
