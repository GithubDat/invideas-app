import React, { Fragment, useState, useEffect } from 'react'
// import Data from "./Challenge.json"
import "./Challenge.css";
import 'font-awesome/css/font-awesome.min.css';
import NewItem from '../NewChallenge/NewItem';
import ProfileData from '../Profile/ProfileData'
import axios from 'axios';
import SelectSort from '../Sort/SelectSort';
import { uuid } from 'uuidv4';

const Challenge = (props) => {

  const [challenges, setChallenges] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState({});

  useEffect(() => {
    const url = "http://localhost:3002/challenges/";
    axios
      .get(url)
      .then(response => {
        // console.log('promise fulfilled')
        setChallenges(response.data);
        setLoading(false);
      })
      .catch(console.log("Error occured in getting challenges"))
    if (!localStorage.getItem('challengeData')) {
    };
  }, []);

  // console.log('render', challenges.length, 'challenges');
  // console.log('1B', JSON.parse(localStorage.getItem('challengeData')) )

  const addNewRow = () => {
    setAddNew(true);
  }

  const getData = (e, type) => {
    // const { row } = setRow(row)
    console.log('render type', type);
    const data = {};
    data[type] = e.target.value;
    console.log('render', data);

    setRow({ ...row, ...data })
  }

  const submitData = () => {
    // const newObj = { likes: 0, display: false, ...row };
    // const localData = [JSON.parse(localStorage.getItem('challengeData')), newObj]
    // setChallenges(localData)
    // setAddNew(false)
    // localStorage.setItem('challengeData', JSON.stringify(localData));
    var now = new Date();
    //var currDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    const newObj = { id: uuid(), ...row, likes: 0, display: false, createdDate: now };
    axios.post('http://localhost:3002/challenges', newObj)
      .then(response => setChallenges([...challenges, response.data]), setAddNew(false))
      .catch(() => {setError('Post challenge data not successfull')});
  }

  const handleUpvote = (data, type) => {
    let flag = (type === "empty") ? true : false;
    // const data = challenges.filter(challenge => challenge.id = id);
    data.display = flag;
    data.likes = data.likes + 1
    data.display = false;
    //data.likes = flag ? (data.likes + 1) : (data.likes - 1)

    axios.put(`http://localhost:3002/challenges/${data.id}`, data)
      .then(response => setChallenges([...challenges]))
      .catch(() => {setError(`Vote challenge not successful for ${data.id}`)});
  }

  const handleSorting = (e) => {
    console.log('In sort');
    console.log('Not sorted');
    e.preventDefault();
    const types = {
      likes: 'likes',
      createdDate: 'createdDate',
    };
    const sortProperty = types[e.target.value];
    const sorted = [...challenges].sort((a, b) => b[sortProperty] - a[sortProperty]);
    console.log('AA', sorted);
    setChallenges(sorted);
  }



  // const { challengeData, addNew } = this.state;
  //  const challengeData2 = (!localStorage.getItem('challengeData')) ? challengeData : JSON.parse(localStorage.getItem('challengeData'));
  // console.log('AA', challenges);
  // console.log('BB',JSON.parse(localStorage.getItem('challengeData')) )
  // const challengeData2 = (!localStorage.getItem('challengeData')) ? challenges : JSON.parse(localStorage.getItem('challengeData'));

  return (

    <div className="hole">
      {/* {console.log('1', props)}
      {console.log('2', {props})} */}
      <ProfileData employee={props}/>
      {!addNew ? 
      <Fragment className='challenges-fragment'>
        <SelectSort handleSorting = {handleSorting} />
        <br></br>
        <h2 className='challenges_heading'>List of Challenges</h2>
          {challenges.map((item) => {
            return (
              <div>
                <div className="card">
                  <div key={item.id}>
                    <h2 className="title">{item.title}</h2>
                    <h5 className="content">{item.description}</h5>
                    <h4 className="tag">{item.tag}</h4>
                    <span>{item.likes}</span>
                    {item.display ?
                      <span>
                        <i className="fa fa-heart challenge_icon"
                          aria-hidden="true"
                          onClick={() => handleUpvote(item, "filled")}
                        ></i>
                      </span> : 
                      <span>
                        <i className="fa fa-heart-o challenge_icon"
                          aria-hidden="true"
                          onClick={() => handleUpvote(item, "empty")}
                        ></i>
                      </span>}
                  </div>
                </div>
              </div>
            );
          })}
      </Fragment> : <NewItem getData={getData} submitData={submitData} />}
      <div className='add-new--container'>
        {!addNew && <> <strong className='add-new--text'>Click on Add New to add your Idea or Challenge</strong><br/> <button className="rdr_btn" onClick={() => addNewRow()}>Add New</button></>}
      </div>
    </div>

  );
}

export default Challenge;
import React, { Fragment, useState, useEffect } from 'react'
// import Data from "./Challenge.json"
import "./Challenge.css";
import 'font-awesome/css/font-awesome.min.css';
import NewItem from '../NewChallenge/NewItem';
import ProfileData from '../Profile/ProfileData'
import axios from 'axios';
import SelectSort from '../Sort/SelectSort';
import { uuid } from 'uuidv4';

const Challenge = (props) => {
  const [challenges, setChallenges] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState({});

  useEffect(() => {
    const url = "http://localhost:3002/challenges";
    axios
      .get(url)
      .then(response => {
        // console.log('promise fulfilled')
        setChallenges(response.data);
        setLoading(false);
      })
      .catch(('Error occured in getting challenges'))
    // if (!localStorage.getItem('challengeData')) {
    // };
  }, []);

  // console.log('render', challenges.length, 'challenges');
  // console.log('1B', JSON.parse(localStorage.getItem('challengeData')) )

  const addNewRow = () => {
    setAddNew(true);
  }

  const getData = (e, type) => {
    // const { row } = setRow(row)
    console.log('render type', type);
    const data = {};
    data[type] = e.target.value;
    console.log('render', data);

    setRow({ ...row, ...data })
  }

  const submitData = () => {
    // const newObj = { likes: 0, display: false, ...row };
    // const localData = [JSON.parse(localStorage.getItem('challengeData')), newObj]
    // setChallenges(localData)
    // setAddNew(false)
    // localStorage.setItem('challengeData', JSON.stringify(localData));
    var now = new Date();
    //var currDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    const newObj = { id: uuid(), ...row, likes: 0, display: false, createdDate: now };
    axios.post('http://localhost:3002/challenges', newObj)
      .then(response => setChallenges([...challenges, response.data]), setAddNew(false))
      .catch(() => {setError('Post challenge data not successfull'); return error;});
  }

  const handleUpvote = (data, type) => {
    let flag = (type === "empty") ? true : false;
    // const data = challenges.filter(challenge => challenge.id = id);
    // data.display = flag;
    // data.likes = data.likes + 1
    data.display = !(data.display);
    data.likes = flag ? (data.likes + 1) : (data.likes - 1)

    axios.put(`http://localhost:3002/challenges/${data.id}`, data)
      .then(response => setChallenges([...challenges]))
      .catch(() => {setError(`Vote challenge not successful for ${data.id}`)});
  }

  const handleSorting = (e) => {
    console.log('In sort');
    console.log('Not sorted');
    e.preventDefault();
    const types = {
      likes: 'likes',
      createdDate: 'createdDate',
    };
    const sortProperty = types[e.target.value];
    const sorted = [...challenges].sort((a, b) => b[sortProperty] - a[sortProperty]);
    console.log('AA', sorted);
    setChallenges(sorted);
  }



  // const { challengeData, addNew } = this.state;
  //  const challengeData2 = (!localStorage.getItem('challengeData')) ? challengeData : JSON.parse(localStorage.getItem('challengeData'));
  // console.log('AA', challenges);
  // console.log('BB',JSON.parse(localStorage.getItem('challengeData')) )
  // const challengeData2 = (!localStorage.getItem('challengeData')) ? challenges : JSON.parse(localStorage.getItem('challengeData'));

  return (

    <div className="hole">

      <ProfileData employee={props}/>
      {!addNew ? 
      <Fragment>
        <div className='challenges-fragment'>
        <SelectSort handleSorting = {handleSorting} />
        <br></br>
        <h2 className='challenges_heading'>List of Challenges</h2>
          {challenges.map((item) => {
            return (
              <div>
                <div className="card">
                  <div key={item.id}>
                    <h2 className="title">{item.title}</h2>
                    <h5 className="content">{item.description}</h5>
                    <h4 className="tag">{item.tag}</h4>
                    <span>{item.likes}</span>
                    {item.display ?
                      <span className='challenge_icon--vote'>
                        <i className="fa fa-heart challenge_icon"
                          aria-hidden="true"
                          onClick={() => handleUpvote(item, "filled")}
                        ></i>
                      </span> : 
                      <span>
                        <i className="fa fa-heart-o challenge_icon"
                          aria-hidden="true"
                          onClick={() => handleUpvote(item, "empty")}
                        ></i>
                      </span>}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
      </Fragment> : <NewItem getData={getData} submitData={submitData} />}
      <div className='add-new--container'>
        {!addNew && <> <strong className='add-new--text'>Click on Add New to add your Idea or Challenge</strong><br/> <button className="rdr_btn ideas-button" onClick={() => addNewRow()}>Add New</button></>}
      </div>
    </div>

  );
}

export default Challenge;
