import { toast } from "react-toastify";

function GetBase64(input, cb) {
  const file = input.target.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", async () => {
    if (file.size > 1_500_000) {
      toast.info("file size most lower than 1.5 mg", {
        position: "bottom-left",
        closeOnClick: true,
      });
      cb(null);
      return;
    }
    cb(reader.result);
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}

export default GetBase64;
