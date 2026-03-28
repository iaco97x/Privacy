import logo from 'figma:asset/dfa301f6e2d3ded834c437921210451aeb52e460.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="TapWork Logo" 
              className="w-24 h-24 rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="mb-4">Informativa sulla Privacy di TapWork</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La tua privacy è fondamentale. TapWork è stata progettata seguendo il principio della "Privacy by Design".
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-10">
          {/* Section 1 */}
          <section className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary">1</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-4">Raccolta dei Dati</h2>
                <p className="text-foreground/90 leading-relaxed">
                  TapWork non raccoglie, non trasmette e non vende i tuoi dati personali, i tuoi orari di lavoro o le tue note. 
                  Tutti i dati relativi alle sessioni di lavoro e alle pause sono salvati localmente sul tuo dispositivo tramite 
                  la tecnologia Apple SwiftData.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary">2</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-4">Sincronizzazione iCloud</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Se attivi la sincronizzazione, i tuoi dati verranno archiviati nel tuo spazio personale iCloud gestito da Apple. 
                  Noi non abbiamo accesso a questo spazio né ai dati in esso contenuti.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary">3</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-4">Servizi di Terze Parti</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  L'app non utilizza tracker di terze parti o servizi di analisi che profilano l'utente.
                </p>
                <p className="text-muted-foreground italic text-sm">
                  (Nota per il futuro: Se aggiungerai RevenueCat per i pagamenti, aggiorneremo questa sezione indicando che 
                  vengono raccolti dati anonimi per gestire l'abbonamento).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary">4</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-4">Contatti</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Per qualsiasi domanda sulla privacy, puoi scrivermi a:{' '}
                  <a 
                    href="mailto:info@tapwork.it" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@tapwork.it
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 TapWork. Tutti i diritti riservati.</p>
        </footer>
      </div>
    </div>
  );
}