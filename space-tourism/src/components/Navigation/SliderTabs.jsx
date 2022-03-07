const SliderTabs = ({ list, active }) => {
  if (list.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-tabs">
      {list.map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className="app__navigation-tab"
          style={
            active === item
              ? { borderBottom: 3, borderColor: '#FFFFFF', color: '#FFFFFF' }
              : {}
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default SliderTabs;
