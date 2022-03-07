const SliderDots = ({ list, active }) => {
  if (list.length === 0) {
    return <div />;
  }
  return (
    <div className="app__navigation-dots">
      {list.map((item, idx) => (
        <a
          href={`#${item}`}
          key={item + idx}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#FFFFFF' } : {}}
        />
      ))}
    </div>
  );
};

export default SliderDots;
