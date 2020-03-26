<?php
// Create the controller class for the MVC design pattern
class Controller {

    // Declare public variables for the controller class
    public $load;
    public $model;

    // Create functions fro the controller class
    function __construct($pageURI = null) {
        // echo pageURI
        $this->load = new Load();
        $this->model = new Model();
        // Determine what page you are on
        $this->$pageURI();
    }

    // home page function
    function home() {
        // Get data from the defined model method - model3D_info()
        $data = $this->model->model3D_info();
        // Tell the loader what view to laod and which data to use
        $this->load->view('view3DAppTest_2', $data);
    }

    // Database functions
    function apiCreateTable() {
        // echo "Create table function";
        $data = $this->model->dbCreateTable();
        $this->load->view('viewMessage', $data);
    }
    function apiInsertData() {
        //echo "Data insertion function";
        $data = $this->model->dbInsertData();
        $this->load->view('viewMessage', $data);
    }

	function apiGetData() {
        // echo "Data retrieval function";
        $data = $this->model->dbGetData();
        $this->load->view('view3DAppdata', $data);
    }

    //apiGetFlickrFeed API
    function apiGetFlickrFeed() {
        $this->load->view('viewFlickrFeed');
    }

    function dbCreateTable()
	{
		echo "Create Table Function";
	}

	function dbInsertData()
	{
		echo "Data Insert Function";
	}

	function dbGetData()
	{
		echo "Data Read Function";
	}
}
?>