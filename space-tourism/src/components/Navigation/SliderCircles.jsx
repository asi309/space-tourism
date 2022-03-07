const SliderCircles = ({ list, active }) => {
  if (list.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-circles">
      {list.map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className="app__navigation-circle"
          style={
            active === item
              ? { backgroundColor: '#FFFFFF', color: '#0B0D17' }
              : {}
          }
        >
          {idx + 1}
        </a>
      ))}
    </div>
  );
};

export default SliderCircles;
