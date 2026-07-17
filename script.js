// ================================
// Ali7usse1n Coffee - JavaScript
// ================================

/**
 * Open Menu PDF
 * This function triggers the menu PDF download/view
 */
function openMenu() {
    // Create a notification
    showNotification('جاري فتح المنيو...');
    
    // Trigger the PDF link
    const pdfLink = document.getElementById('pdfLink');
    
    // Simulate PDF opening (in real scenario, replace with actual PDF path)
    setTimeout(() => {
        // For demo purposes, we'll create and download a sample PDF
        downloadMenuPDF();
    }, 500);
}

/**
 * Download Menu PDF
 * Creates and downloads a sample menu PDF
 */
function downloadMenuPDF() {
    // This is a sample implementation
    // In production, you would link to an actual PDF file
    
    const link = document.createElement('a');
    
    // For now, we'll use a placeholder
    // Replace 'menu.pdf' with your actual PDF file path
    link.href = 'menu.pdf';
    link.download = 'Ali7usse1n_Coffee_Menu.pdf';
    
    // Check if the file exists
    fetch('menu.pdf')
        .then(response => {
            if (response.ok) {
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showNotification('✅ تم تحميل المنيو بنجاح', 'success');
            } else {
                throw new Error('PDF not found');
            }
        })
        .catch(() => {
            // If PDF file doesn't exist, show instructions
            showNotification('⚠️ يرجى إضافة ملف menu.pdf إلى المشروع', 'warning');
            console.log('Please add a menu.pdf file to the project root directory');
        });
}

/**
 * Show Notification
 * Displays a temporary notification message
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles dynamically if not in CSS
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#4CAF50';
            notification.style.color = 'white';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            notification.style.color = 'white';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            notification.style.color = 'white';
            break;
        default:
            notification.style.backgroundColor = '#2196F3';
            notification.style.color = 'white';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Add smooth scroll behavior
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Press 'M' to open menu
        if (event.key === 'm' || event.key === 'M') {
            openMenu();
        }
    });

    console.log('🎉 Ali7usse1n Coffee - Website Loaded Successfully!');
});

/**
 * Add animation styles dynamically
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);