import { useState } from 'react';
import styles from '../Styles/Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // ✅ No TypeScript types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ No TypeScript types
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>

        <div className={styles.content}>
          
          {/* LEFT INFO */}
          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <div className={styles.icon}>📧</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>
                  <a href="mailto:geetha.sye@email.com">
                   Geethaladdu496@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>📱</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>
                  <a href="tel:+919513119553 ">+91 9513119553 </a>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>📍</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Location</div>
                <div className={styles.infoValue}>Banglore</div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>🎭</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Profession</div>
                <div className={styles.infoValue}>
                  Dance Choreographer
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div style={{ marginTop: '1rem' }}>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  marginBottom: '1rem',
                }}
              >
                Follow my work
              </p>

              <div className={styles.socialLinks}>
                {/* <a href="#" className={styles.socialLink}>📷</a>
                <a href="#" className={styles.socialLink}>👥</a>
                <a href="#" className={styles.socialLink}>𝕏</a> */}
                <a href="https://www.instagram.com/geetha_sye_official?igsh=ZG80dm1mNWxvYm0=" className={styles.socialLink}>💼</a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};
