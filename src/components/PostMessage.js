import React from "react";

export default function PostMessage({
  departmentList,
  msgItems,
  handleFormEdits,
  handleFormPost
}) {
  function departmentOptions() {
    //Convert Object into an array of keys to map over
    var departmentKeys = Object.keys(departmentList);

    //Map through array and build out the key and value pairs
    return departmentKeys.map(function(key, i) {
      return (
        <option value={key} key={i}>
          {departmentList[key]}
        </option>
      );
    });
  }

  //Update states of form items
  function updateFormEdits(e) {
    handleFormEdits(e);
  }

  function postFormUpdate(e) {
    e.preventDefault();

    handleFormPost();
  }

  return (
    <div
      className="postMsgC"
      style={{
        background: "#ccc",
        width: "30%",
        float: "left",
        padding: "20px"
      }}
    >
      <form onSubmit={postFormUpdate}>
        <h2>Post A Message</h2>

        <textarea
          name="messeageTxt"
          value={msgItems.messeageTxt}
          onChange={updateFormEdits}
          placeholder="Enter message"
          style={{ width: "98%", height: "80px" }}
        />
        <br />

        <select
          name="messeageDepartment"
          value={msgItems.messeageDepartment}
          onChange={updateFormEdits}
          id="deparment"
          style={{ width: "100%", height: "30px" }}
        >
          <option>- Select -</option>
          {departmentOptions()}
        </select>
        <br />
        <br />

        <input
          type="submit"
          value="Post Message"
          style={{ width: "100px", height: "30px" }}
        />
      </form>
    </div>
  );
}
