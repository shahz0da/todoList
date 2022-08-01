import BigCard from './Home1'
import React from 'react'
import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import { AiOutlineEdit, AiFillSave, AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { TiThumbsDown, TiThumbsUp, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);
    const value3 = useSelector(state => state.value3);


    const dispatch = useDispatch();

    const typing = (e) => {
        const action = { type: "TYPING", payload: e.target.value };
        dispatch(action);
    }

    const typing2 = (e) => {
        const action = { type: "TYPINGG", payload: e.target.value };
        dispatch(action);
    }

    const add = () => {
        if (value.trim() === "") {
            alert("Please write some words !");
            return;
        }
        const action = { type: "ADD_TASK", payload: value };
        dispatch(action);
    }

    const deleteTask = (i) => {
        const action = { type: "DELETE_TASK", payload: i };
        console.log(i);
        dispatch(action);

    }
    const clearAll = () => {
        const action = { type: "CLEAR_ALL", payload: data };
        dispatch(action);

    }

    const chiziq = (i) => {
        const action = { type: "CHIZIQ", payload: i };
        dispatch(action);
    }

    // tugma bosilganda inputga eski qiymat chiqi qolsin
    const edit = (i) => {
        const action = { type: "EDIT_TASK", payload: i };
        console.log(action.payload);
        dispatch(action);
    }

    // saqlash
    const save = (i) => {
        const action = { type: "SAVE_TASK", payload: i };
        dispatch(action);
    }

    return (
        <BigCard>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div data-aos="fade-down">
                                <h1 className='fw-bold text-light text-center'>To Do Up</h1>
                            </div>
                            <div data-aos="fade-up" className='todocard'>
                                <div className='d-flex pb-3'>
                                    <input type="text" onChange={typing} value={value} placeholder='Words ...' className='form-control' />
                                    <button onClick={add} className='btn btn-primary ms-2' ><VscAdd /></button>
                                </div>
                                <div>
                                    {data?.map((v, i) => {
                                        return <div key={i} className='middleCard p-1'>
                                            <p className={v.edit ? "d-none" : 'm-0'}>{i + 1}   <span className={v.cmoplete ? "none" : "chiziq"}> {v.main}</span></p>

                                            <div className={v.edit ? "d-none" : 'd-flex align-items-center justify-content-between buttonsCard'}>
                                                <div className='d-fle me-1'>
                                                    <button className='btn btn-warning wt'><TiArrowSortedUp /></button>
                                                    <button className='btn btn-warning wt'><TiArrowSortedDown /></button>
                                                </div>
                                                <button onClick={() => chiziq(i)} className='btn btn-secondary'>
                                                    <span className={v.cmoplete ? "d-none" : "d-block"}><TiThumbsDown /></span>
                                                    <span className={v.cmoplete ? "d-block" : "d-none"}><TiThumbsUp /></span>
                                                </button>
                                                <button onClick={() => edit(i)} className='btn btn-success ms-1'><AiOutlineEdit /></button>
                                                <button onClick={() => deleteTask(i)} className='btn btn-danger ms-1'><BsFillTrashFill /></button>
                                            </div>
                                            <div className={v.edit ? 'd-flex justify-content-between w-100' : "d-none"}>
                                                <input type="text" onChange={typing2} className='form-control' value={value3} />
                                                <button onClick={() => save(i)} className='btn btn-primary'><AiFillSave /></button>
                                            </div>
                                        </div>

                                    })}
                                    <div className='d-flex justify-content-between pt-3'>
                                        <p>All tasks: {data.length}</p>
                                        <button onClick={clearAll} className='btn btn-danger'>Clear All</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up">
                    <p className='text-center fs-4 text-light fghfgh'>Shahzoda</p>
                    <div className='provayders'>
                        <a href="https://t.me/MySitesAndPortfolio"><FaTelegramPlane /></a>
                        <a href="https://www.instagram.com/makhmudjanov__24/"><AiFillInstagram /></a>
                        <a href="https://github.com/Erkin303?tab=repositories"><AiFillGithub /></a>
                    </div>
                </div>
            </div>

        </BigCard>
    )
}

export default Home