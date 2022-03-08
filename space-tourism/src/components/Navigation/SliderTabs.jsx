const SliderTabs = ({ list, active, clickHandler }) => {
  if (list.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-tabs">
      {list.map((item, idx) => (
        <p
          onClick={() => clickHandler(idx)}
          key={item.name + idx}
          className="app__navigation-tab"
          style={
            active === idx
              ? {
                  borderBottom: 3,
                  borderBottomStyle: 'solid',
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                }
              : {}
          }
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default SliderTabs;
