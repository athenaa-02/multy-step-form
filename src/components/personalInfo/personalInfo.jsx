import Heading from '../heading/Heading';

function personalInfo() {
  return (
    <>
     <Heading header='Personal info' article='Please provide your name, email address, and phone number.'></Heading>
      <form >
        <div className="name_input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/>
        </div>
        
        <div className="email_input">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" />
        </div>
        
        <div className="name_input">
          <label htmlFor="tel">Phone Number</label>
          <input type="number"id="tel" />
        </div>
      </form>
    </>
  );
}

export default personalInfo;
