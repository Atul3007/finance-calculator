import { Link } from 'react-router-dom';

function HomePage() {
  const calculators = [
    {
      id: 'emi',
      icon: '🏠',
      title: 'EMI Calculator',
      description: 'Calculate your monthly EMI for home, car, or personal loans',
      path: '/emi-calculator',
      color: '#4f46e5'
    },
    {
      id: 'gst',
      icon: '🧮',
      title: 'GST Calculator',
      description: 'Calculate GST inclusive/exclusive amounts instantly',
      path: '/gst-calculator',
      color: '#10b981'
    },
    {
      id: 'sip',
      icon: '📈',
      title: 'SIP Calculator',
      description: 'Plan your mutual fund SIP investments and returns',
      path: '/sip-calculator',
      color: '#3b82f6'
    },
    {
      id: 'tax',
      icon: '💼',
      title: 'Income Tax Calculator',
      description: 'Calculate income tax for FY 2024-25 (New & Old Regime)',
      path: '/tax-calculator',
      color: '#ef4444'
    },
    {
      id: 'fd',
      icon: '🏦',
      title: 'FD Calculator',
      description: 'Calculate fixed deposit maturity amount and interest',
      path: '/fd-calculator',
      color: '#8b5cf6'
    },
    {
      id: 'ppf',
      icon: '🎯',
      title: 'PPF Calculator',
      description: 'Calculate Public Provident Fund returns (15 years)',
      path: '/ppf-calculator',
      color: '#f59e0b'
    }
  ];

  return (
    <div>
      <div className="home-hero">
        <h1>Free Finance Calculators</h1>
        <p>Smart financial planning tools trusted by 1 Lakh+ Indians</p>
      </div>

      <div className="calculator-cards">
        {calculators.map(calc => (
          <Link key={calc.id} to={calc.path} className="calculator-card">
            <div className="calculator-card-icon">{calc.icon}</div>
            <h3>{calc.title}</h3>
            <p>{calc.description}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '60px', padding: '40px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Why Choose Our Calculators?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
            <h3>100% Accurate</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Latest tax rates and calculation methods updated for 2024-25</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>⚡</div>
            <h3>Instant Results</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Get calculations in real-time without any page refresh</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🔒</div>
            <h3>100% Private</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>All calculations happen in your browser, no data stored</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;