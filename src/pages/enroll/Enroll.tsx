
// import logo from  "../../assets/images/brainboostlogo.png"

const Enroll = () => {
  return (
    <div>
      <form action="" className="flex flex-col">
        <h1>Enroll form</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>

         <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>

         <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age"/>

         <label htmlFor="department">Department</label>
        <input type="text" name="name" id="department"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Enroll