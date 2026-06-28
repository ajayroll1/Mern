import Todo from "../models/todo.model.js";

export const createTodo = async (req, res) => {


  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({
        success: false,
        message: "not found !"

      });
    }
    const todo = await Todo.create({ task, user: req.user.id });

    res.status(201).json({
      success: true,
      message: "todo created Sucessfully",
      data: todo


    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message

    });

  }
};

export const getMyTodos = async (req, res) => {
  try {

    const todos = await Todo.find({
      user: req.user.id
    });
    return res.status(200).json({
      success: true,
      message: "Todos Fetched Successfully",
      data: todos,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}



export const updateTodo = async (req, res) => {

  try {
    
    

    const { id } = req.params;
    const { task ,isCompleted } = req.body;
    
    
    

    
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    
    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Access Denied"
      });
    }

    
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task ,isCompleted },
      { returnDocument: "after" }                                                                                                                               
    );

    return res.status(200).json({
      success: true,
      message: "Todo Updated Successfully",
      data: updatedTodo
    });

  } catch (error) {
  console.log(error);

  return res.status(500).json({
    success: false,
    message: error.message
  });

  }
};





export const deleteTodo = async (req, res) => {
  try {

    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "not found !"

      });
    }


    if (todo.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "access denied"

      });
    }

    await Todo.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "task deleted "

    });



  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message

    });
  }
}

