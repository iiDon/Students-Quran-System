const Menu = () => {
  return (
    <div className="overflow-x-scroll h-screen">
      <div className=" bg-dark-purple m-6 text-white p-6 rounded shadow-lg ">
        <h1 className="text-xl mb-4">مهم:</h1>
        <p className="mb-2">
          تم تصميم هذا النظام من قبل () وهو نظام مجاني تماما للجعيات الخيرية
          وجمعيات تحفيظ القرآن، حيث يحتوي على العديد من المزايا، ولا زال النظام
          تحت التطوير، المزايا الموجودة حاليا هي:{" "}
        </p>
        <ul>
          <li>- إضافة وحذف وتعديل الطلاب</li>
          <li>- إرسال رسائل نصية لأولياء الأمور والطلاب</li>
        </ul>
        <div className="bg-white"></div>
      </div>
    </div>
  );
};

export default Menu;
