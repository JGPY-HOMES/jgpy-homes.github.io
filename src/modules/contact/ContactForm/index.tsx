import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import "./form.scss";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 模拟表单提交
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 这里可以添加实际的表单提交逻辑
      console.log("表单数据:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("提交失败:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.message;

  return (
    <section className="contact-form-section">
      <div className="contact-form">
        <div className="contact-form__header">
          <h3 className="contact-form__title">在线留言</h3>
          <p className="contact-form__subtitle">
            填写以下信息，我们会尽快与您联系
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form__form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FaUser className="form-label__icon" />
                姓名 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="请输入您的姓名"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <FaPhone className="form-label__icon" />
                联系电话 *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="请输入您的联系电话"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="form-label__icon" />
                邮箱地址
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="请输入您的邮箱地址（可选）"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <FaComment className="form-label__icon" />
                咨询主题
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="请输入咨询主题（可选）"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <FaComment className="form-label__icon" />
              留言内容 *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="请详细描述您的装修需求或问题"
              rows={5}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn--primary btn--submit"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  提交中...
                </>
              ) : (
                <>
                  <FaPaperPlane className="btn__icon" />
                  提交留言
                </>
              )}
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="form-message form-message--success">
              留言提交成功！我们会尽快与您联系。
            </div>
          )}

          {submitStatus === "error" && (
            <div className="form-message form-message--error">
              提交失败，请稍后重试或直接联系我们。
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
