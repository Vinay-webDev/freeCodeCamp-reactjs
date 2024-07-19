class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  //1.Camper component
  const Camper = (props) => {
    return(
      <>
        <p>{props.name}</p>
      </>
    );
  }
  //2.defaultProps
  Camper.defaultProps = {
    name: 'CamperBot'
  }
  
  //3.PropTypes
  Camper.propTypes = {
    name: PropTypes.string.isRequired,
  }