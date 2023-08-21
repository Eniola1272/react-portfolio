import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
        <MailchimpSubscribe
          url={postUrl}  
          render={({ subscribe, status, message }) => (
            <Newsletter
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
          )}
      />
    </>
  )
}




// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// // simplest form (only email)
// const SimpleForm = () => <MailchimpSubscribe url={url}/>

// // use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <SimpleForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )