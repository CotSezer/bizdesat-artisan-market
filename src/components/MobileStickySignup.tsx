
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const MobileStickySignup = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Teşekkürler!",
        description: "E-posta adresiniz başarıyla kaydedildi.",
      });
      setEmail("");
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden animate-slide-in-bottom">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-800">
          Erken erişim için kaydol!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-11 text-sm"
          required
        />
        <Button 
          type="submit"
          className="h-11 px-4 bg-[#0046C6] hover:bg-[#003a9e] text-white text-sm font-medium"
        >
          Bizdesat'a Katıl
        </Button>
      </form>
    </div>
  );
};

export default MobileStickySignup;
