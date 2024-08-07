

function example ()

{
  return (
    <p>Hello</p>
  )
}

function days(){
  const date = Date.now();
  const currentMonth = new Date(date).getMonth();
  const currentYear = new Date(date).getFullYear();
    return (
      <div className="days">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        {example()}
      </div>
    );
  }


export default days