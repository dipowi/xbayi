import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

interface DangerZoneProps {
  onReset: () => void;
}

const DangerZone = ({ onReset }: DangerZoneProps) => {
  return (
    <div className="px-4 py-8 max-w-lg mx-auto">
      <div className="bg-card rounded-2xl p-5 border border-destructive/20 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-destructive flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Zona Berbahaya
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          Menghapus semua data termasuk profil bayi dan seluruh riwayat stimulasi.
          Tindakan ini tidak dapat dibatalkan.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="w-full py-3 rounded-xl bg-destructive text-destructive-foreground font-body font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-95">
              Reset Semua Data
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-2xl max-w-sm mx-auto">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-heading">
                Yakin ingin menghapus semua data?
              </AlertDialogTitle>
              <AlertDialogDescription className="font-body">
                Seluruh profil bayi dan riwayat stimulasi harian akan dihapus
                permanen dari perangkat ini.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="rounded-xl font-body">
                Batal
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={onReset}
                className="rounded-xl bg-destructive text-destructive-foreground font-body hover:bg-destructive/90"
              >
                Hapus Semua
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default DangerZone;
