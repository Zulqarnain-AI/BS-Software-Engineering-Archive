import $ from 'jquery'
function App() {
  $(document).ready(function(){
    
    $('button').click(function(){

      $('tr:even').css("background-color",'blue');
    });

    $('button').dblclick(function(){

      $('tr:even').css("background-color",'red')
    });
    $('tr').on({
      mouseenter:function(){
        $(this).css('background-color','yellow');
      },
      mouseleave:function(){
        $(this).css('background-color','white');
        $(this).css('color','black');
      }
    })
    
    $('.one').children()
  
  });
  return (
    <>
    <div className='one'>
      <p >this is the para</p>
      <p >this is the second para</p>
    </div>
      {/* <button>click me</button> */}
      {/* <table border={2}>
        <thead>

        <tr>
          <th>name</th>
          <th>age</th>
          <th>Roll NO</th>
        </tr>
        </thead>
        <tbody>

        <tr>
          <td>ali</td>
          <td>23</td>
          <td>23</td>
        </tr>
        <tr>
          <td>ali</td>
          <td>23</td>
          <td>23</td>
        </tr>
        <tr>
          <td>ali</td>
          <td>23</td>
          <td>23</td>
        </tr>
        <tr>
          <td>ali</td>
          <td>23</td>
          <td>23</td>
        </tr>
        </tbody>
        
      </table> */}
      
    </>
  )
}

export default App
