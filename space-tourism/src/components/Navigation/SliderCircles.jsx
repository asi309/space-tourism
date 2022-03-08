const SliderCircles = ({ list, active, clickHandler }) => {
  if (!list || list?.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-circles">
      {list.map((item, idx) => (
        <div
          onClick={() => clickHandler(idx)}
          key={item + idx}
          className="app__navigation-circle"
          style={
            active === idx
              ? { backgroundColor: '#FFFFFF', color: '#0B0D17' }
              : {}
          }
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default SliderCircles;
