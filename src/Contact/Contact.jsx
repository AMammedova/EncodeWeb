import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className={style.Contact}>
        <form>
      <div className={style.formContainer}>
      <div className={style.FormLeft}> <label htmlFor="name">Ad Soyad:</label>
          <input type="text" id="name" name="name" placeholder="Ad Soyad" required />

          <label htmlFor="company-name">Müəssənin adi:</label>
          <input type="text" id="company-name" name="company-name" placeholder="Müəssənin adi" required />

          <label htmlFor="position">Vəzifə:</label>
          <input type="text" id="position" name="position" placeholder="Vəzifə" required />

          <label htmlFor="phone">Mobil nömrə:</label>
          <input type="number" id="phone" name="Mobil nömrə" required />
</div>
         <div className={style.FormRight}>
         <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" required />

          <label htmlFor="questions">Sualiniz:</label>
          <textarea id="questions" name="questions" rows="4" placeholder="Sualiniz" required></textarea>

        
         </div>
      </div>
         <button className={style.formBtn} type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
