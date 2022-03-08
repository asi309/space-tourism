const SliderDots = ({ list, active, clickHandler }) => {
  if (!list || list?.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-dots">
      {list.map((item, idx) => (
        <div
          onClick={() => clickHandler(idx)}
          key={item + idx}
          className="app__navigation-dot"
          style={active === idx ? { backgroundColor: '#FFFFFF' } : {}}
        />
      ))}
    </div>
  );
};

export default SliderDots;
